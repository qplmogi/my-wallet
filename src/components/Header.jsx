import Button from "./ui/Button";

const Header = ()=>{
    return(
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6" style={{flexDirection: 'row-reverse'}}>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="hidden text-lg font-semibold sm:inline-block">
                            کیف پول آنلاین من
                        </span>                        
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <span className="text-lg font-bold">💰</span>
                        </div>
                    </div>
                </div>
            
                <div className="flex items-center gap-4">
                    <Button>
                    ثبت نام رایگان
                    </Button>
                </div>
            </div>
        </header>
    )
}
export default Header;
