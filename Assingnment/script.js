  const apiKey = '74b38b7cbd043cbd4629a513101aca6f';
  const cityInput = document.getElementById('cityInput');
  const searchBtn = document.getElementById('searchBtn');
  const displayCity = document.getElementById('displayCity');
  const displayCondition = document.getElementById('displayCondition');
  const displayTemp = document.getElementById('displayTemp');
  const displayHumidity = document.getElementById('displayHumidity');
  const displayWind = document.getElementById('displayWind');
  const displayPressure = document.getElementById('displayPressure');
  const displayUpdated = document.getElementById('displayUpdated');
  const historyContainer = document.getElementById('historyContainer');
  const historyCount = document.getElementById('historyCount');
  const deleteAllBtn = document.getElementById('deleteAllBtn');
  const errorContainer = document.getElementById('errorContainer');
  const geoLink = document.getElementById('geoDemoLink');

  function currentTime() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  function renderHistory() {
    const history = JSON.parse(localStorage.getItem('weatherHistory') || '[]');
    historyCount.innerText = history.length;
    if (history.length === 0) {
      historyContainer.innerHTML = `<div class="history-item" style="background: transparent; justify-content: center; color: #456983;">✨ no searches yet</div>`;
      return;
    }
    historyContainer.innerHTML = history.map((item, index) => {
      const statusClass = item.success ? 'status-indicator' : 'status-indicator failed';
      return `
        <div class="history-item" data-index="${index}">
          <div class="city-info">
            <span class="${statusClass}"></span>
            <span class="city-name">${item.city}</span>
            <span class="time-badge">${item.time || 'now'}</span>
          </div>
          <div class="item-actions">
            <button class="delete-one" data-city="${item.city}" data-time="${item.time}" title="delete this entry">✕</button>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.delete-one').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const city = btn.dataset.city;
        const time = btn.dataset.time;
        deleteSingleHistoryItem(city, time);
      });
    });
  }

  function deleteSingleHistoryItem(city, time) {
    let history = JSON.parse(localStorage.getItem('weatherHistory') || '[]');
    history = history.filter(item => !(item.city === city && item.time === time));
    localStorage.setItem('weatherHistory', JSON.stringify(history));
    renderHistory();
  }

  function addValidHistory(city, success = true) {
    if (!city || city.trim() === '') return;
    const trimmed = city.trim();
    let history = JSON.parse(localStorage.getItem('weatherHistory') || '[]');
    const timestamp = currentTime();
    const newEntry = { city: trimmed, time: timestamp, success };
    history = history.filter(item => item.city.toLowerCase() !== trimmed.toLowerCase() || !item.success);
    history.unshift(newEntry);
    if (history.length > 8) history.pop();
    localStorage.setItem('weatherHistory', JSON.stringify(history));
    renderHistory();
  }

  function showError(msg) {
    errorContainer.innerHTML = `<div class="error-banner">❌ ${msg}</div>`;
    setTimeout(() => { errorContainer.innerHTML = ''; }, 4000);
  }

  async function fetchWeather(city) {
    console.log('🔹 sync start');
    errorContainer.innerHTML = '';
    if (!city || city.trim() === '') {
      showError('enter a city name');
      console.log('🔹 sync end');
      return;
    }
    try {
      console.log('⏳ [ASYNC] fetch started');
      displayCity.innerText = city;
      displayCondition.innerText = 'updating...';
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`);
      if (!res.ok) {
        if (res.status === 404) throw new Error(`city "${city}" not found`);
        throw new Error(`http error ${res.status}`);
      }
      const data = await res.json();
      console.log('⚡ [PROMISE] microtask (then)');
      displayCity.innerText = data.name;
      displayCondition.innerText = data.weather[0].description;
      displayTemp.innerText = data.main.temp.toFixed(1);
      displayHumidity.innerText = data.main.humidity;
      displayWind.innerText = data.wind.speed.toFixed(2);
      displayPressure.innerText = data.main.pressure;
      displayUpdated.innerText = currentTime();
      addValidHistory(data.name, true);
      setTimeout(() => {
        console.log('⏰ [MACRO] setTimeout (macro)');
        displayUpdated.innerText = currentTime() + ' ⏲️';
      }, 800);
    } catch (err) {
      console.log('⚡ [PROMISE] microtask (catch)');
      showError(err.message);
      displayCity.innerText = '--';
      displayCondition.innerText = '--';
      displayTemp.innerText = '--';
      displayHumidity.innerText = '--';
      displayWind.innerText = '--';
      displayPressure.innerText = '--';
      displayUpdated.innerText = '--';
      if (city.trim() !== '') {
        let history = JSON.parse(localStorage.getItem('weatherHistory') || '[]');
        const failedExists = history.some(item => item.city.toLowerCase() === city.toLowerCase() && !item.success);
        if (!failedExists) {
          history.unshift({ city: city.trim(), time: currentTime(), success: false });
          if (history.length > 8) history.pop();
          localStorage.setItem('weatherHistory', JSON.stringify(history));
          renderHistory();
        }
      }
    } finally {
      console.log('🔹 sync end');
    }
  }

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchWeather(cityInput.value);
  });

  cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      fetchWeather(cityInput.value);
    }
  });

  deleteAllBtn.addEventListener('click', () => {
    localStorage.removeItem('weatherHistory');
    renderHistory();
  });

  geoLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('🎥 Geo sample video demo (assignment reference)');
  });

  renderHistory();
  if (cityInput.value.trim()) {
    fetchWeather(cityInput.value);
  }
