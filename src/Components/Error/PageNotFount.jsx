import { Link } from "react-router";


const PageNotFount = () => {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-5xl font-bold text-error">404</h1>
            <p className="text-xl mt-2 text-base-content/70">
                Oops! The page you’re looking for doesn’t exist.
            </p>

            <div className="mt-6">
                <Link to="/" className="btn btn-error text-white">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFount;