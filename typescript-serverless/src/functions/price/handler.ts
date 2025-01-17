import { functionHandler } from "@/libs/function";
import { Price } from "@/types.generated";
import { getRepository } from "@/repositories/listings";

export const getListingPrices = functionHandler<Price[]>(
  async (_event, context) => {
    const listingPrices = await getRepository(
      context.postgres
    ).getListingPrices(parseInt(_event.pathParameters.id));
    return {
      statusCode: 200,
      response: listingPrices,
    };
  }
);
