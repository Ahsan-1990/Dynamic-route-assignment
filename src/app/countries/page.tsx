import React from "react";
import Link from "next/link"

const Country = () => {
  
 
    return(
        <div>

        <h1 className="font-bold underline">COUNTRIES LIST</h1><br/>
        <ol className="font-bold">
            <li>
                <Link href={"/countries/pakistan"}> Pakistan</Link>
            </li>
            <li>
                <Link href={"/countries/india"}> India</Link>
            </li>
            <li>
                <Link href={"/countries/china"}> China</Link>
            </li>
            <li>
                <Link href={"/countries/japan"}> USA</Link>
                
            </li>

            <li>
                <Link href={"/countries/banagladesh"}> Banagladesh</Link>
                
            </li>
        </ol>

        </div>
        
    )
}

export default Country;