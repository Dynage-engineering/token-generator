/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TokenService } from "../token.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TokenCreateInput } from "./TokenCreateInput";
import { Token } from "./Token";
import { TokenFindManyArgs } from "./TokenFindManyArgs";
import { TokenWhereUniqueInput } from "./TokenWhereUniqueInput";
import { TokenUpdateInput } from "./TokenUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TokenControllerBase {
  constructor(
    protected readonly service: TokenService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Token })
  @nestAccessControl.UseRoles({
    resource: "Token",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TokenCreateInput,
  })
  async createToken(@common.Body() data: TokenCreateInput): Promise<Token> {
    return await this.service.createToken({
      data: {
        ...data,

        createdBy: data.createdBy
          ? {
              connect: data.createdBy,
            }
          : undefined,
      },
      select: {
        chain: true,
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        initialPrice: true,
        quantity: true,
        socials: true,
        symbolField: true,
        token_name: true,
        updatedAt: true,
        walletAddress: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Token] })
  @ApiNestedQuery(TokenFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Token",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tokens(@common.Req() request: Request): Promise<Token[]> {
    const args = plainToClass(TokenFindManyArgs, request.query);
    return this.service.tokens({
      ...args,
      select: {
        chain: true,
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        initialPrice: true,
        quantity: true,
        socials: true,
        symbolField: true,
        token_name: true,
        updatedAt: true,
        walletAddress: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Token })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Token",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async token(
    @common.Param() params: TokenWhereUniqueInput
  ): Promise<Token | null> {
    const result = await this.service.token({
      where: params,
      select: {
        chain: true,
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        initialPrice: true,
        quantity: true,
        socials: true,
        symbolField: true,
        token_name: true,
        updatedAt: true,
        walletAddress: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Token })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Token",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TokenUpdateInput,
  })
  async updateToken(
    @common.Param() params: TokenWhereUniqueInput,
    @common.Body() data: TokenUpdateInput
  ): Promise<Token | null> {
    try {
      return await this.service.updateToken({
        where: params,
        data: {
          ...data,

          createdBy: data.createdBy
            ? {
                connect: data.createdBy,
              }
            : undefined,
        },
        select: {
          chain: true,
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          initialPrice: true,
          quantity: true,
          socials: true,
          symbolField: true,
          token_name: true,
          updatedAt: true,
          walletAddress: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Token })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Token",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteToken(
    @common.Param() params: TokenWhereUniqueInput
  ): Promise<Token | null> {
    try {
      return await this.service.deleteToken({
        where: params,
        select: {
          chain: true,
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          initialPrice: true,
          quantity: true,
          socials: true,
          symbolField: true,
          token_name: true,
          updatedAt: true,
          walletAddress: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
