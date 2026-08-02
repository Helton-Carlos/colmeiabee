---
inclusion: always
---

# Backend Standards

## Code Style

- Never use comments in the code
- Never use `any` type — always use explicit types or generics
- Use single quotes for strings

## Architecture (NestJS + SOLID)

- Follow the official NestJS documentation patterns for modules, controllers, services, and providers
- One module per domain/feature (e.g., `users/`, `auth/`, `orders/`)
- Each module contains its own controller, service, DTOs, and entities
- Use dependency injection for all service dependencies (D — Dependency Inversion)
- Each class has a single responsibility (S — Single Responsibility)
- Use interfaces/abstract classes to define contracts between layers (D — Dependency Inversion)
- Services should be open for extension but closed for modification (O — Open/Closed)
- Prefer small, focused interfaces over large ones (I — Interface Segregation)
- Subtypes must be substitutable for their base types (L — Liskov Substitution)

## File & Folder Structure

```
src/
  module-name/
    dto/
      create-module-name.dto.ts
      update-module-name.dto.ts
    entities/
      module-name.entity.ts
    interfaces/
      module-name.interface.ts
    module-name.controller.ts
    module-name.service.ts
    module-name.module.ts
```

## Naming Conventions

- Files: kebab-case (e.g., `user-profile.service.ts`)
- Classes: PascalCase (e.g., `UserProfileService`)
- Interfaces: PascalCase prefixed with `I` (e.g., `IUserRepository`)
- DTOs: PascalCase suffixed with `Dto` (e.g., `CreateUserDto`)
- Entities: PascalCase suffixed with `Entity` or matching the Prisma model name

## DTOs & Validation

- Use `class-validator` decorators for input validation
- Use `class-transformer` for serialization
- Separate Create and Update DTOs

## Error Handling

- Use NestJS built-in exceptions (`NotFoundException`, `BadRequestException`, etc.)
- Use exception filters for custom error formatting when needed

## Services

- Business logic lives in services, never in controllers
- Controllers only handle HTTP concerns (request/response)
- Use repository pattern or Prisma service for data access
