class Logs {
    constructor(private readonly namespace: string) { 
        this.namespace = this.namespace.toUpperCase()
    }

    print(message: string) {
        console.log(`⚡️[${this.namespace}]: ${message}`)
    }
}

export default Logs