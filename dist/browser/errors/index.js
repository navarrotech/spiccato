export class ImmutableStateError extends Error {
    constructor(message) {
        super(message);
        this.name = "ImmutableStateError";
    }
}
export class ProtectedNamespaceError extends Error {
    constructor(message) {
        super(message);
        this.name = "ProtectedNamespaceError";
    }
}
export class ManagerNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "ManagerNotFoundError";
    }
}
