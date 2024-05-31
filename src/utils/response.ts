import { Response } from "express"

export const sendResponse = (
  res: Response,
  statusNUmber: number,
  status: string,
  message: string,
  property?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, prefer-const
  let responseData: { [key: string]: any } = {
    status,
    message,
  }
  if (property) {
    responseData[property] = data
  }
  res.status(statusNUmber).json(responseData)
}
