export class UnauthorizedError extends Error {
  constructor(...args: ConstructorParameters<ErrorConstructor>) {
    super(...args);
  }
}

export class ForbiddenError extends Error {
  constructor(...args: ConstructorParameters<ErrorConstructor>) {
    super(...args);
  }
}

export class NotFoundError extends Error {
  constructor(...args: ConstructorParameters<ErrorConstructor>) {
    super(...args);
  }
}

export class InternalServerError extends Error {
  constructor(...args: ConstructorParameters<ErrorConstructor>) {
    super(...args);
  }
}
