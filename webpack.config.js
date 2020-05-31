var lifecycleEvents = String(process.env.npm_lifecycle_event).split(':') // 对应 package.json 里的 dev:projectName 例如 admin

const config = {
  admin: {
    name: 'admin',
    port: 2333,
    entry: './src/admin/admin.ts',
    output: 'dist/admin',
    statics: ['admin']
  },
  manage: {
    name: 'manage',
    port: 2233,
    entry: './src/manage/manage.ts',
    output: 'dist/manage',
    statics: ['manage']
  },
  main: {
    name: 'main',
    port: 233,
    entry: './src/main/main.ts',
    output: 'dist/main',
    statics: ['main']
  }
}

module.exports = config[lifecycleEvents[1]]
