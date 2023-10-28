import grpc from '@grpc/grpc-js'
import protoloader from '@grpc/proto-loader'

const PROTO_FILE = './proto/user.proto'

async function main() {
    const packageDefinition = protoloader.loadSync(PROTO_FILE, {
        keepCase: true,
        longs: String,
        enums: String,
        arrays: true
    })

    const userProto = grpc.loadPackageDefinition(packageDefinition)
    const server = new grpc.Server()

    const users = []

    server.addService(userProto.UserService.service, {
        getUsers: (_, callback) => {
            console.log(users)
            callback(null, {users});
        },
        addUser: (call, callback) => {
            const user = call.request;
            console.log(user)
            users.push(user);
            callback(null, user);
        }
    })

    await server.bindAsync(
        '127.0.0.1:3043',
        grpc.ServerCredentials.createInsecure(),
        () => {
            server.start()
            console.log('Server RPC on port 3043')
        }
    )
}

main()