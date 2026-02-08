let token = "";

async function register() {

  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "student",
      email: rEmail.value,
      password: rPass.value
    })
  });

  const data = await res.json();

  if (!res.ok) {
    rMsg.innerText = data.message || "Register error";
    rMsg.className = "error";
    return;
  }

  rMsg.innerText = "Registered successfully";
  rMsg.className = "success";
}


async function login() {

  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: lEmail.value,
      password: lPass.value
    })
  });

  const data = await res.json();

  if (!res.ok) {
    lMsg.innerText = data.message || "Invalid login";
    lMsg.className = "error";
    token = "";
    return;
  }

  token = data.token;

  lMsg.innerText = "Logged in successfully";
  lMsg.className = "success";
}


async function getWeather() {

  if (!token) {
    alert("Please login first");
    return;
  }

  const res = await fetch("/api/cities/weather/" + city.value, {
    headers: {
      Authorization: "Bearer " + token
    }
  });

  const data = await res.json();

  if (!res.ok) {
    alert("Cannot get weather");
    return;
  }

  result.innerText = JSON.stringify(data, null, 2);
}
