
import { invalidUUIDError } from './errors/invalid-uuid-error'
import { UUID } from './index'

describe('UUID Class', () => {
  it('should create a valid UUID using the static create method', () => {
    // Act
    const uuidInstance = UUID.create()

    // Assert
    expect(uuidInstance).toBeInstanceOf(UUID)
    expect(uuidInstance.Value).toBeDefined()
  })

  it('should assign the value correctly in the constructor', () => {
    // Arrange
    const invalidUUID = 'invalid-uuid'

    // Act
    const sut = () => new UUID(invalidUUID)

    // Assert

    expect(sut).toThrow(invalidUUIDError(invalidUUID))
  })
  it('should assign the value correctly in the constructor', () => {
    // Arrange
    const customValue = crypto.randomUUID()

    // Act
    const uuidInstance = new UUID(customValue)

    // Assert
    expect(uuidInstance.Value).toBe(customValue)
  })
})
