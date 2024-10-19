import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';

// @Catch(HttpException)
// export class HttpExceptionFilter implements ExceptionFilter {
//     catch(exception: HttpException) {
//         const status = exception.getStatus();
//         const message = exception.message;
//         console.log('=================');
//         console.log('예외가 발생!!');
//         console.log('예외 내용:', message);
//         console.log('예외 코드:', status);
//         console.log('=================');
//     }
// }

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message:
                exception instanceof HttpException
                    ? exception.message
                    : 'Internal server error',
        });
    }
}
