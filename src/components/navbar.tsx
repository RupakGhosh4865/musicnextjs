'use client' ;

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        
        ><Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem setActive={setActive} active="{active}"
                item ="home">
                </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active}item="our courses">
          <div className="flex flex-col space-y-4 text-sm">
             <HoveredLink href ="/courses">all courses</HoveredLink>
             <HoveredLink href ="/courses">basic music theory</HoveredLink>
             <HoveredLink href ="/courses">advacenced composition</HoveredLink>
             <HoveredLink href ="/courses">song writing</HoveredLink>
             <HoveredLink href ="/courses">music production</HoveredLink>

          </div>
            </MenuItem>
            <Link href={"/contact"}>
                <MenuItem setActive={setActive} active="{active}"
                item ="contact us">
                </MenuItem>
            </Link>
         </Menu>
            </div>
    )
}


export default Navbar;

