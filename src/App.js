import { useEffect } from "react";
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
import ProductInfo from "scenes/products/ProductInfo";
import CustomerInfo from "scenes/customers/CustomerInfo";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.global.mode); // eslint-disable-line no-use-before-define
  const loggedUser = useSelector((state) => state.global.loggedUser); // eslint-disable-line no-use-before-define

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  let storedUser = undefined;
  if (localStorage.getItem("user")) {
    storedUser = JSON.parse(localStorage.getItem("user"));
  } else storedUser = undefined && localStorage.clear();

  useEffect(() => {
    client.fetch(userQuery(storedUser?.googleId)).then((data) => {
      dispatch(setLoggedUser(data[0]));
    });
  }, [storedUser?.googleId, dispatch]);

  // loggedUser === "undefined" && window.location.reload();

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {storedUser ? (
              <Route element={<Layout user={loggedUser} />}>
                <Route path="/" element={<Navigate to="/" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/products"
                  element={<Products user={loggedUser} />}
                />
                <Route path="/products">
                  <Route path=":productId" element={<ProductInfo />} />
                </Route>
                <Route
                  path="/customers"
                  element={<Customers user={loggedUser} />}
                />
                <Route path="/customers">
                  <Route path=":customerId" element={<CustomerInfo />} />
                </Route>
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
