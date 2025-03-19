import { useEffect, useState } from "react"

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear())

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div className="text-center h-12 flex justify-center items-center border-2">
            <p>&copy; {year}. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
