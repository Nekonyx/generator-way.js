export type TVar<T> = T | Variable<T> | Constant<T>

/** A class that is used to create a constant. */
export class Constant<T> {
  /** A private property that is used to store the value of the variable. */
  protected _value: T | undefined

  /** A private property that is used to store the destroyed state of the variable. */
  protected _destroyed = false

  /**
   * If the variable has been destroyed, throw an error. Otherwise, return the value
   * @returns The value of the variable.
   */
  public get value(): T {
    if (this._destroyed) {
      throw new Error('The variable has been destroyed')
    }

    return this._value as T
  }

  /**
   * IIf the variable has been destroyed, returns true. Otherwise, returns false
   * @returns The value of the private property _destroyed.
   */
  public get destroyed(): boolean {
    return this._destroyed
  }

  /**
   * The constructor function takes a value of type T and assigns it to the value property
   * @param {T} value - T - The value of the node.
   */
  public constructor(value: T) {
    this._value = value
  }

  /**
   * This function destroys the variable.
   */
  public destroy() {
    this._destroyed = true
    this._value = undefined
  }
}

/** A class that is used to create a variable. */
export class Variable<T> extends Constant<T> {

  /**
   * If the variable has been destroyed, throw an error. Otherwise, return the value
   * @returns The value of the variable.
   */
  public get value(): T {
    if (this._destroyed) {
      throw new Error('The variable has been destroyed')
    }

    return this._value as T
  }

  /**
   * If the variable has been destroyed, throw an error. Otherwise, set the value
   * @param {T} value - The initial value of the variable.
   */
  public set value(value: T) {
    if (this._destroyed) {
      throw new Error('The variable has been destroyed')
    }

    this._value = value
  }
}

export const variable = {
  /**
   * It takes a value of type T and returns a generator that yields an IVariable<T> object
   * @param {T} value - T - The value of the variable.
   * @returns A generator function that returns an object with a value property.
   */
  *create<T>(value: T): Generator<unknown, Variable<T>, unknown> {
    return new Variable<T>(value)
  },

  /**
   * It returns a new Variable that contains a boolean value that is true if the value passed to the
   * function is a Variable
   * @param {any} value - any
   * @returns A new Variable<boolean>
   */
  *isVariable(value: any): Generator<unknown, Variable<boolean>, unknown> {
    return new Variable<boolean>(value instanceof Variable)
  },

  /**
   * It returns a new Variable that contains a boolean value that is true if the value passed to the
   * function is a Constant
   * @param {any} value - any
   * @returns A generator that returns a Variable<boolean>
   */
  *isConstant(value: any): Generator<unknown, Variable<boolean>, unknown> {
    return new Variable<boolean>(value instanceof Constant)
  },

  /**
   * It takes a value of type T and returns a generator that yields an object with a value property of
   * type T
   * @param {T} value - T
   * @returns A generator function that returns an object with a value property.
   */
  *createConstant<T>(value: T): Generator<unknown, Constant<T>, unknown> {
    return new Constant<T>(value)
  },

  /**
   * If the data is a Variable or Constant, return the value of the Variable or Constant, otherwise
   * return the data
   * @param {any} data - any - The data to unwrap.
   * @returns The value of the variable or constant.
   */
  unwrap<T>(data: TVar<T>): T {
    if (data instanceof Variable || data instanceof Constant) {
      return data.value
    }

    return data
  }
}
