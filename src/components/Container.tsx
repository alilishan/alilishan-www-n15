

const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="container mx-auto px-4 py-10 z-10 relative">
        <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-start justify-between bg-white shadow-2xl shadow-white rounded-lg overflow-hidden">
            {children}
        </div>
    </div>;
};

export default Container;
