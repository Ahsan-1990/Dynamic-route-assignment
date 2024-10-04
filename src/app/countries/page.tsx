import Link from "next/link"

export default function Countries (){
  
 
    return(
        <div>

        <h3>Counties List</h3>
        <ol>
            <li>
                <Link href={"/countries/country-Pakistan"}> Pakistan</Link>
            </li>
            <li>
                <Link href={"/countries/country-India"}> India</Link>
            </li>
            <li>
                <Link href={"/countries/country-China"}> Japan</Link>
            </li>
            <li>
                <Link href={"/countries/country-USA"}> USA</Link>
            </li>
        </ol>

        </div>
    )
}