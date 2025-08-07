


export const MarkdownOverrides = {
    p: {
        component: ({ children, ...props }: any) => <p {...props}>{children}</p>,
        props: {
            className: "text-sm text-muted-foreground mb-2",
        },
    },
    ul: {
        component: ({ children, ...props }: any) => <ul {...props}>{children}</ul>,
        props: {
            className: "text-sm text-muted-foreground pl-6",
        },
    },
    li: {
        component: ({ children, ...props } : any) => <li {...props}>{children}</li>,
        props: {
            className: 'text-sm text-muted-foreground list-disc list-outside mb-2',
        },
    },
    strong: {
        component: ({ children, ...props }: any) => <strong {...props}>{children}</strong>,
        props: {
            className: 'font-bold',
        },
    },
}
