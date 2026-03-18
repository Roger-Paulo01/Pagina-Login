export function Menu () {
    return (
        <nav>
            <ul className="flex gap-2">
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">register</a></li>
            </ul>
        </nav>
    );
}