// --------------------- Config component ---------------------
const Config = () => {
    // api url
    let url = 'https://ef6eaffcdfb243cb9165ff6b075a0382.vfs.cloud9.us-east-1.amazonaws.com';
    
    return (
        {
            base: `${url}/`,
            company: `${url}/api/company`,
            employee: `${url}/employee`,
        }
    )
}

export default Config;