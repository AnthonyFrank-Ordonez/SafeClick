
type SectionProps = {
    children: React.ReactNode;
    className?: string;
}


export function Section({children, className}: SectionProps) {
    return (
       <div className={`w-full ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 mx-auto max-w-xl lg:max-w-7xl h-full">
            <div className="col-span-1 lg:col-span-12 h-full">
                {children}
            </div>
        </div>
       </div>
    )
}