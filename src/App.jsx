/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ref from "./10_Ref/Ref";
import CustomHooks from "./11_CustomHooks/CustomHooks";
import Redux from "./12_Redux/Redux";
import ReduxThunk from "./13_ReduxThunk/ReduxThunk";
import Welcome from "./1_Components/Welcome";
import Profile from "./2_JSX/Profile";
import Events from "./3_Events/Events";
import ConditionalRendering from "./4_ConditionalRendering/ConditionalRendering";
import RenderList from "./5_RenderList/RenderList";
import Props from "./6_Props/Props";
import State from "./7_State/State";
import Form from "./8_Form/Form";
import Effect from "./9_Effect/Effect";
import Home from "./Ex-HomeLayout/Home";
import ShoeShop from "./Ex-ShoeShop/ShoeShop";
import Shopping from "./Ex-Shopping/Shopping";
import StateCar from "./Ex-StateCar/StateCar";
import BusTicket from "./Ex_BusTicket/BusTicket";
import Shop from "./Ex_ShopLayout/Shop";
import UserManagement from "./Ex_UserManagement/UserManagement";
import HomeLayout from "./layouts/HomeLayout";
import PostList from "./14_Router/PostList";
import PostDetails from "./14_Router/PostDetails";
import Styles from "./15_Styles/Styles";
import ReactQuery from "./16_ReactQuery/ReactQuery";
// Component: là một function return về cú pháp JSX mô tả giao diện sẽ được hiển thị
function App() {
  // JSX: Javascript XML là một cú pháp đặc biệt cho phép viết HTML bên trong Javascript
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shopping />} />
          <Route path="user" element={<UserManagement />} />

          <Route path="posts" element={<PostList />} />

          {/* Dynamic segment: posts/1, posts/2,..., posts/999 */}
          <Route path="posts/:id" element={<PostDetails />} />

          <Route path="styles" element={<Styles />} />

          <Route path="react-query" element={<ReactQuery />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
