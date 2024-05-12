import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.PORT || 3001;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('REST API Trade')
      .setTitle('documentation API trade')
      .setVersion('0.1 alpha')
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(port, () => console.log(`server started on port:${port}`));
}
bootstrap();
