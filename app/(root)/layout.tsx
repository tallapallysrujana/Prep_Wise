import React, {ReactNode} from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
    return (
        <div className="pattern text-white min-h-screen">{children}</div>
    )
}
export default RootLayout
