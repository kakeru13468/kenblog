import { Link } from 'react-router-dom';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © {currentYear} Ken Blog. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <Link
                            to="/terms"
                            className="hover:text-foreground transition-colors"
                        >
                            使用權
                        </Link>
                        <Link
                            to="/privacy"
                            className="hover:text-foreground transition-colors"
                        >
                            隱私權政策
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
