import Index from "../views/index";
import AgGrid from "../views/modules/table/AgGrid";

export const AppRouter =[
    {
      path:'/index',
      element:<Index/>
    },
    {
      path:'/datagrid',
      element:<AgGrid />
    }
    ]