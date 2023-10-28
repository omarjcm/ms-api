import grpc from '@grpc/grpc-js'
import protoloader from '@grpc/proto-loader'

const PROTO_FILE = './proto/user.proto'

const packageDefinition = protoloader.loadSync(PROTO_FILE, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})

const UserService = grpc.loadPackageDefinition(packageDefinition).UserService

const client = new UserService(
    "localhost:3043",
    grpc.credentials.createInsecure()
)

export default client