
//生成子路由配置
export const generateChildrenRoutes = (path) => {

    const currentRoutes = Object.keys(path).map((key) => {

        const pathStr = key.replace(/(\.\/|\.vue)/g, '')
        const path = pathStr.split('/').slice(2).join('/')
        const name = pathStr.split('/').pop()

        return {
            path: name,
            name: name,
            component: () => import(`../views/OriginApi/${name}.vue`),
        };
    });

    const routesConfig = currentRoutes.filter(item => item.name !== 'index')

    return routesConfig;

}