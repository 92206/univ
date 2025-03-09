import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip away properties not defined in the DTO
      // forbidNonWhitelisted: true, // Throw an error if extra properties are present
      transform: true, // Automatically transform payloads to DTO instances
      transformOptions: {
        enableImplicitConversion: true, // Enable implicit type conversion
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('UNIV API') // Change the title as needed
    .setDescription('API documentation for UNIV backend ')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(process.env.PORT ?? 8080, '0.0.0.0');
  console.log(
    `🚀 Server running on http://localhost:${process.env.PORT ?? 8080}`,
  );
}
bootstrap();
