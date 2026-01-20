import type { MenuData }  from "@adminui-dev/antd-layout"
import {Badge} from "antd"
import {UsersRound,Contact,UserLock,Shield,BrickWallShield,FingerprintPattern,HeartHandshake,Gauge,MonitorCheck,Bell,ChartNoAxesCombined,TableProperties,BadgeDollarSign,Globe,ClipboardClock,ScanFace,NotebookPen,Scale,SquareChartGantt,Box,Cog,MonitorCog,BellRing,Building2} from "lucide-react"
/**
 * Menu data
 * A menu corresponds to a route, and the root menu is not displayed, but it must correspond to a layout route because an item may have a layout.
 */
const menuData:MenuData = {
    name:"",
    path:"/",
    label:"Dashboard",
    icon:<Gauge size={16} />,
    children:[        
        {name:"welcome",path:"./welcome",label:"Welcome",icon:<HeartHandshake size={16} />},
        {name:"workbench",path:"./workbench",label:"Workbench",icon:<MonitorCheck size={16} />,children:[            
            {name:"notifications",path:"./notifications",label:"Notifications",icon:<Bell size={16} />,extra:<Badge count={18} />},
            {name:"monitoring",path:"./monitoring",label:"Monitoring",icon:<ChartNoAxesCombined size={16} />},
            {name:"report",path:"./report",label:"Report",icon:<TableProperties size={16} />,children:[                
                {name:"visit",path:"./visit",label:"Visit",icon:<Globe size={16} />},
                {name:"sales",path:"./sales",label:"Sales",icon:<BadgeDollarSign size={16} />},
            ]},
            {name:"logs",path:"./logs",label:"Logs",icon:<ClipboardClock size={16} />,children:[
                {name:"login",path:"./login",label:"Login",icon:<ScanFace size={16} />},
                {name:"operation",path:"./operation",label:"Operation",icon:<NotebookPen size={16} />},
            ]},
        ]},
        {name:"transaction",path:"./transaction",label:"Transaction",icon:<Scale size={16} />,children:[
            {name:"order",path:"./order",label:"Order",icon:<SquareChartGantt size={16} />},
            {name:"order",path:"./product",label:"Product",icon:<Box size={16} />},
        ]},
        {name:"system",path:"./system",label:"System",icon:<MonitorCog size={16} />,children:[
            {name:"settings",path:"./settings",label:"Settings",icon:<Cog size={16} />},
            {name:"organizations",path:"./organizations",label:"Organizations",icon:<Building2 size={16} />,children:[
                {name:"dept",path:"./dept",label:"Dept",icon:<Contact size={16} />},
                {name:"user",path:"./user",label:"User",icon:<UsersRound size={16} />},
            ]},
            {name:"security",path:"./security",label:"Security",icon:<Shield size={16} />,children:[
                {name:"role",path:"./role",label:"Role",icon:<UserLock size={16} />},
                {name:"permission",path:"./permission",label:"Permission",icon:<FingerprintPattern size={16} />},
                {name:"firewall",path:"./firewall",label:"Firewall",icon:<BrickWallShield size={16} />},
            ]},
        ]},
    ]
}
export default menuData