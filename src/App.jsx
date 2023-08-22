/* eslint-disable no-unused-vars */
import Ref from "./10_Ref/Ref";
import CustomHooks from "./11_CustomHooks/CustomHooks";
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
import Shop from "./Ex_ShopLayout/Shop";
import UserManagement from "./Ex_UserManagement/UserManagement";

// Component: là một function return về cú pháp JSX mô tả giao diện sẽ được hiển thị
function App() {
  // JSX: Javascript XML là một cú pháp đặc biệt cho phép viết HTML bên trong Javascript
  return (
    // <>
    //   <h1>Hello BC52</h1>
    //   <Welcome />
    //   <Welcome />
    //   <Profile />
    // </>

    // Lý thuyết

    // <Events />
    // <ConditionalRendering />
    // <RenderList />
    // <Props />
    // <State />
    // <Form />
    // <Effect />
    // <Ref />
    <CustomHooks />

    // Bài tập

    // <Home />
    // <Shop />
    // <ShoeShop />
    // <StateCar />
    // <Shopping />
    // <UserManagement /> // làm phần gõ setTimeout
  );
}

export default App;
