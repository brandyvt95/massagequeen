/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    async redirects() {
        return [
            {
                source: '/index.php',
                destination : '/',
                permanent : true
            },{
                source: '/dich-vu.php',
                destination : '/dich-vu',
                permanent : true
            },{
                source: '/khuyen-mai.php',
                destination : '/khuyen-mai',
                permanent : true
            },{
                source: '/tin-tuc.php',
                destination : '/tin-tuc',
                permanent : true
            },{
                source: '/dich-vu/massage-vip.php',
                destination : '/dich-vu/massage-vip',
                permanent : true
            },{
                source: '/dich-vu/massage-super-vip-01.php',
                destination : '/dich-vu/massage-super-vip-01',
                permanent : true
            },{
                source: '/dich-vu/massage-super-vip-02.php',
                destination : '/dich-vu/massage-super-vip-02',
                permanent : true
            },{
                source: '/dich-vu/massage-super-vip-03.php',
                destination : '/dich-vu/massage-super-vip-03',
                permanent : true
            },{
                source: '/dich-vu/massage-super-vip-04.php',
                destination : '/dich-vu/massage-super-vip-04',
                permanent : true
            },{
                source: '/dich-vu/massage-super-queen.php',
                destination : '/dich-vu/massage-super-queen',
                permanent : true
            }
        ]
    }
};

export default nextConfig;
