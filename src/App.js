import { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Login from "scenes/login";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import { client } from "client";
import { userQuery } from "utils/data";
import { setLoggedUser } from "state";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.global.mode);
  // const user = useSelector((state) => state.global.loggedUser);
  const [user, setUser] = useState(null);
  const loggedIn = useSelector((state) => state.global.loggedIn);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  // if (localStorage.getItem("user") !== "undefined") {
  //   user = JSON.parse(localStorage.getItem("user"));
  // } else user = null;

  let storedUser = JSON.parse(localStorage.getItem("user"));
  // console.log("🚀 ~ file: App.js:36 ~ App ~ storedUser", storedUser);

  useEffect(() => {
    client.fetch(userQuery(storedUser.googleId)).then((data) => {
      setUser(data);
    });
  }, []);

  dispatch(setLoggedUser(user));

  console.log("🚀 ~ file: App.js:25 ~ App ~ user", user);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {user && loggedIn ? (
              <Route element={<Layout user={user} />}>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products user={user} />} />
                <Route path="/customers" element={<Customers user={user} />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/monthly" element={<Monthly />} />
                <Route path="/breakdown" element={<Breakdown />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/performance" element={<Performance />} />
              </Route>
            ) : (
              <Route>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<Login />} />
              </Route>
            )}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
