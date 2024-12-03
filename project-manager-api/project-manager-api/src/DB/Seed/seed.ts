import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { User } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userRepository = app.get('UserRepository');

  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash('password', salt);

  const users = [
    { email: 'test@mail.com', password },
    { email: 'test2@mail.com', password },
  ];

  for (const userData of users) {
    const user = userRepository.create(userData);
    await userRepository.save(user);
  }

  console.log('Users seeded!');
  process.exit();
}
bootstrap();
