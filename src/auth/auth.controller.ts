import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(
    @Body('userName') userName: string,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    const user = await this.authService.validateUser(userName, password);
    const statusCode = user ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
    res
      .status(statusCode)
      .send({ user, message: user ? 'Login Successfull' : 'Invalid User' });
    //
  }
  @Post('signup')
  async signup(@Body() data: any, @Res() res: Response) {
    const user = await this.authService.signup(data);
    const statusCode = user ? HttpStatus.ACCEPTED : HttpStatus.NOT_FOUND;
    // return { message: user ? 'Login Successfull' : 'Invalid User' };
    res.status(statusCode).send(user);
  }
}
