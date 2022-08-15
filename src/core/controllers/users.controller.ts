import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Post,
    Param,
    Query,
    Request,
    UseGuards,
  } from '@nestjs/common';
  import { EventEmitter2 } from '@nestjs/event-emitter';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  import { HashService } from 'src/hash/hash.service';
  import { UsersService } from '../services/users.service';
  
  @Controller('users')
  export class UsersController {
    constructor(
    ) {}
  
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getUserProfile(@Request() request) {
    //   const userId = request.user.userId;
    //   const user = await this.usersService.findById(userId);
    //   return user;
    }
  
    @Post('register')
    async register(@Body() request) {
    //   const userExists = await this.usersService.findOne(request.username);
  
    //   if (userExists) {
    //     throw new HttpException(
    //       'A user has already been registered with that username.',
    //       HttpStatus.BAD_REQUEST,
    //     );
    //   }
  
    //   const passwordHash = await this.hashService.createHash(request.password);
  
    //   const user = await this.usersService.create({
    //     emailAddress: request.username,
    //     passwordHash,
    //   });
  
    //   const { guid, otp } = await this.emailConfirmationService.create(user);
  
    //   this.eventEmitter.emit(
    //     'user.registered',
    //     new UserRegisteredEvent(user.emailAddress, guid, otp),
    //   );
  
    //   return {
    //     guid,
    //   };
    }
  
    @Get('email-confirmation')
    async confirmEmail(@Query('ref') ref: string, @Query('otp') otp: string) {
    //   const emailConfirmation = await this.emailConfirmationService.findByGuid(
    //     ref,
    //   );
  
    //   if (!emailConfirmation) {
    //     throw new HttpException(
    //       'Cannot find email confirmation',
    //       HttpStatus.NOT_FOUND,
    //     );
    //   }
  
    //   const otpValid = await this.emailConfirmationService.validate(
    //     emailConfirmation,
    //     otp,
    //   );
  
    //   if (!otpValid) {
    //     throw new HttpException(
    //       'The OTP provided is not valid',
    //       HttpStatus.BAD_REQUEST,
    //     );
    //   }
  
    //   const { user, id } = emailConfirmation;
    //   user.emailConfirmed = true;
    //   await this.usersService.update(user);
    //   await this.emailConfirmationService.delete(id);
    }
  
    @Get('/findUsersByEmail/:userEmail')
    async findUsersByEmail(@Param() params) {
    }
  }
  