

const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto w-full flex items-start justify-between px-4">
            {children}
        </div>
    </div>;
};

export default Container;
