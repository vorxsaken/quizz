import Head from "next/head"

function Layout({ children, title, className, container = true }) {
    const headTitle = `${title} | Quizz`;
    const layoutClassname = `${className} ${container && 'container'}`;

    return (
        <div className={layoutClassname}>
            <Head>
                <title>{headTitle}</title>
            </Head>
            {children}
        </div>
    )
}

export default Layout