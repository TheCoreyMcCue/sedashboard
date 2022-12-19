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
  const mode = useSelector((state) => state.global.mode); // eslint-disable-line no-use-before-define
  const [user, setUser] = useState(null);

  // const loggedIn = useSelector((state) => state.global.loggedIn);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  let storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    client.fetch(userQuery(storedUser.googleId)).then((data) => {
      dispatch(setLoggedUser(data));
      setUser(data[0]);
    });
  }, [dispatch, storedUser?.googleId]);

  console.log("🚀 ~ file: App.js:47 ~ App ~ user", user);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {user ? (
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
