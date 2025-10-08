import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings } from "lucide-react";
import Link from "next/link";

export default function Sidebar( {currentPath = "/dashboard"} : { currentPath : string; } ) {
    
    const navigation =[
        {name: "Dashboard", href: "/dashboard", icon: BarChart3},
        {name: "Inventory", href: "/inventory", icon: Package},
        {name: "Add Product", href: "/add-product", icon: Plus},
        {name: "Settings", href: "/settings", icon: Settings},
    ]; 
    
    return(
        <div className="fixed left-0 top-0 bg-gray-900 text-white w-64 min-h-screen p-6 z-10">
            <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                    <BarChart3 className="w-10 h-10"/>
                    <span className="text-lg font-semibold">Inventory System</span>
                </div>
            </div>

            <nav className="space-y-1">
                <div className="text-sm font-semibold text-gray-400 uppercase">
                    Inventory
                </div>
                {navigation.map((item,key)=> {
                    const IconComponent = item.icon;
                    const isActive = currentPath === item.href;
                    
                    return(
                    <Link href={item.href} key={key} className={`flex items-center space-x-3 py-2 rounded-lg ${isActive ? 'bg-gray-800 text-white p-2' : 'text-gray-400 hover:bg-gray-800 hover:text-white p-2'}`}>
                        <IconComponent className="w-5 h-5"/>
                        <span className="text-sm">{item.name}</span>
                    </Link>
                    
                )})}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
                <div className="flex items-center justify-between">
                    <UserButton showUserInfo/>
                </div>
            </div>

        </div>
    )
};
