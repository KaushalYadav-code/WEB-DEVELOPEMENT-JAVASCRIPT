import React, { useState } from 'react';

function HomePage() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <button onClick={() => setLogin(false)}>
        Logout
      </button>
    );
  } else {
    return (
      <button onClick={() => setLogin(true)}>
        Login
      </button>
    );
  }
}

export default HomePage;