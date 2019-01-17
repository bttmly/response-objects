import { STATUS_CODES } from "http";
const getName = (code: number) => STATUS_CODES[code]!.replace(/[\s+-]/g, "");

const responses = new WeakSet()

function toJSON(this: {body: any, status: number, headers: Headers}) {
  return { body: this.body, status: this.status, headers: this.headers };
}

function toString(this: {status: number}) {
  return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}

const proto: ResponseObject<undefined> = { toJSON, toString, body: undefined, status: 0, statusCode: 0, headers: {} };

const errProto: ErrorResponseObject<undefined> = Object.assign(Object.create(Error.prototype), proto);

export interface BaseResponseObject<T> {
  body: T;
  status: number;
  headers: Headers;
}

export interface ResponseObject<T> extends BaseResponseObject<T> {
  statusCode: number,
  toJSON(): BaseResponseObject<T>;
  toString(): string;
}

export interface ErrorResponseObject<T> extends ResponseObject<T>, Error {}

export interface Headers {
  [header: string]: number | string | string[] | undefined;
}

function R(code: number): ResponseObject<void>
function R<T> (code: number, body?: T, headers?: Headers): ResponseObject<T>
function R<T> (code: number, body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  let resp;
  if (code >= 400) {
    resp = Object.create(errProto);
    Error.captureStackTrace(resp, R);
  } else {
    resp = Object.create(proto)
  }
  resp.status = resp.statusCode = code;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}

namespace R {
  
  export function Continue(): ResponseObject<void>;
  export function Continue<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function Continue<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 100;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function SwitchingProtocols(): ResponseObject<void>;
  export function SwitchingProtocols<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function SwitchingProtocols<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 101;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Processing(): ResponseObject<void>;
  export function Processing<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function Processing<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 102;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function EarlyHints(): ResponseObject<void>;
  export function EarlyHints<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function EarlyHints<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 103;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function OK(): ResponseObject<void>;
  export function OK<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function OK<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 200;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Created(): ResponseObject<void>;
  export function Created<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function Created<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 201;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Accepted(): ResponseObject<void>;
  export function Accepted<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function Accepted<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 202;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function NonAuthoritativeInformation(): ResponseObject<void>;
  export function NonAuthoritativeInformation<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function NonAuthoritativeInformation<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 203;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function NoContent(): ResponseObject<void>;
  export function NoContent<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function NoContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 204;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function ResetContent(): ResponseObject<void>;
  export function ResetContent<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function ResetContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 205;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function PartialContent(): ResponseObject<void>;
  export function PartialContent<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function PartialContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 206;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function MultiStatus(): ResponseObject<void>;
  export function MultiStatus<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function MultiStatus<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 207;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function AlreadyReported(): ResponseObject<void>;
  export function AlreadyReported<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function AlreadyReported<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 208;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function IMUsed(): ResponseObject<void>;
  export function IMUsed<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function IMUsed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 226;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function MultipleChoices(): ResponseObject<void>;
  export function MultipleChoices<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function MultipleChoices<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 300;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function MovedPermanently(): ResponseObject<void>;
  export function MovedPermanently<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function MovedPermanently<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 301;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Found(): ResponseObject<void>;
  export function Found<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function Found<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 302;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function SeeOther(): ResponseObject<void>;
  export function SeeOther<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function SeeOther<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 303;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function NotModified(): ResponseObject<void>;
  export function NotModified<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function NotModified<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 304;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function UseProxy(): ResponseObject<void>;
  export function UseProxy<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function UseProxy<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 305;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function TemporaryRedirect(): ResponseObject<void>;
  export function TemporaryRedirect<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function TemporaryRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 307;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function PermanentRedirect(): ResponseObject<void>;
  export function PermanentRedirect<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function PermanentRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 308;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

    export function BadRequest(): ResponseObject<void>;
    export function BadRequest<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function BadRequest<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, BadRequest);
      resp.status = resp.statusCode = 400;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function Unauthorized(): ResponseObject<void>;
    export function Unauthorized<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function Unauthorized<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, Unauthorized);
      resp.status = resp.statusCode = 401;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function PaymentRequired(): ResponseObject<void>;
    export function PaymentRequired<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function PaymentRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, PaymentRequired);
      resp.status = resp.statusCode = 402;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function Forbidden(): ResponseObject<void>;
    export function Forbidden<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function Forbidden<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, Forbidden);
      resp.status = resp.statusCode = 403;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function NotFound(): ResponseObject<void>;
    export function NotFound<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function NotFound<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, NotFound);
      resp.status = resp.statusCode = 404;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function MethodNotAllowed(): ResponseObject<void>;
    export function MethodNotAllowed<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function MethodNotAllowed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, MethodNotAllowed);
      resp.status = resp.statusCode = 405;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function NotAcceptable(): ResponseObject<void>;
    export function NotAcceptable<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function NotAcceptable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, NotAcceptable);
      resp.status = resp.statusCode = 406;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function ProxyAuthenticationRequired(): ResponseObject<void>;
    export function ProxyAuthenticationRequired<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function ProxyAuthenticationRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, ProxyAuthenticationRequired);
      resp.status = resp.statusCode = 407;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function RequestTimeout(): ResponseObject<void>;
    export function RequestTimeout<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function RequestTimeout<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, RequestTimeout);
      resp.status = resp.statusCode = 408;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function Conflict(): ResponseObject<void>;
    export function Conflict<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function Conflict<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, Conflict);
      resp.status = resp.statusCode = 409;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function Gone(): ResponseObject<void>;
    export function Gone<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function Gone<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, Gone);
      resp.status = resp.statusCode = 410;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function LengthRequired(): ResponseObject<void>;
    export function LengthRequired<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function LengthRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, LengthRequired);
      resp.status = resp.statusCode = 411;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function PreconditionFailed(): ResponseObject<void>;
    export function PreconditionFailed<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function PreconditionFailed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, PreconditionFailed);
      resp.status = resp.statusCode = 412;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function PayloadTooLarge(): ResponseObject<void>;
    export function PayloadTooLarge<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function PayloadTooLarge<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, PayloadTooLarge);
      resp.status = resp.statusCode = 413;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function URITooLong(): ResponseObject<void>;
    export function URITooLong<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function URITooLong<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, URITooLong);
      resp.status = resp.statusCode = 414;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function UnsupportedMediaType(): ResponseObject<void>;
    export function UnsupportedMediaType<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function UnsupportedMediaType<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, UnsupportedMediaType);
      resp.status = resp.statusCode = 415;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function RangeNotSatisfiable(): ResponseObject<void>;
    export function RangeNotSatisfiable<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function RangeNotSatisfiable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, RangeNotSatisfiable);
      resp.status = resp.statusCode = 416;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function ExpectationFailed(): ResponseObject<void>;
    export function ExpectationFailed<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function ExpectationFailed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, ExpectationFailed);
      resp.status = resp.statusCode = 417;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function MisdirectedRequest(): ResponseObject<void>;
    export function MisdirectedRequest<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function MisdirectedRequest<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, MisdirectedRequest);
      resp.status = resp.statusCode = 421;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function UnprocessableEntity(): ResponseObject<void>;
    export function UnprocessableEntity<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function UnprocessableEntity<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, UnprocessableEntity);
      resp.status = resp.statusCode = 422;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function Locked(): ResponseObject<void>;
    export function Locked<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function Locked<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, Locked);
      resp.status = resp.statusCode = 423;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function FailedDependency(): ResponseObject<void>;
    export function FailedDependency<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function FailedDependency<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, FailedDependency);
      resp.status = resp.statusCode = 424;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function UnorderedCollection(): ResponseObject<void>;
    export function UnorderedCollection<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function UnorderedCollection<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, UnorderedCollection);
      resp.status = resp.statusCode = 425;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function UpgradeRequired(): ResponseObject<void>;
    export function UpgradeRequired<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function UpgradeRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, UpgradeRequired);
      resp.status = resp.statusCode = 426;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function PreconditionRequired(): ResponseObject<void>;
    export function PreconditionRequired<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function PreconditionRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, PreconditionRequired);
      resp.status = resp.statusCode = 428;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function TooManyRequests(): ResponseObject<void>;
    export function TooManyRequests<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function TooManyRequests<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, TooManyRequests);
      resp.status = resp.statusCode = 429;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function RequestHeaderFieldsTooLarge(): ResponseObject<void>;
    export function RequestHeaderFieldsTooLarge<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function RequestHeaderFieldsTooLarge<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, RequestHeaderFieldsTooLarge);
      resp.status = resp.statusCode = 431;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function UnavailableForLegalReasons(): ResponseObject<void>;
    export function UnavailableForLegalReasons<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function UnavailableForLegalReasons<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, UnavailableForLegalReasons);
      resp.status = resp.statusCode = 451;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function InternalServerError(): ResponseObject<void>;
    export function InternalServerError<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function InternalServerError<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, InternalServerError);
      resp.status = resp.statusCode = 500;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function NotImplemented(): ResponseObject<void>;
    export function NotImplemented<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function NotImplemented<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, NotImplemented);
      resp.status = resp.statusCode = 501;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function BadGateway(): ResponseObject<void>;
    export function BadGateway<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function BadGateway<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, BadGateway);
      resp.status = resp.statusCode = 502;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function ServiceUnavailable(): ResponseObject<void>;
    export function ServiceUnavailable<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function ServiceUnavailable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, ServiceUnavailable);
      resp.status = resp.statusCode = 503;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function GatewayTimeout(): ResponseObject<void>;
    export function GatewayTimeout<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function GatewayTimeout<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, GatewayTimeout);
      resp.status = resp.statusCode = 504;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function HTTPVersionNotSupported(): ResponseObject<void>;
    export function HTTPVersionNotSupported<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function HTTPVersionNotSupported<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, HTTPVersionNotSupported);
      resp.status = resp.statusCode = 505;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function VariantAlsoNegotiates(): ResponseObject<void>;
    export function VariantAlsoNegotiates<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function VariantAlsoNegotiates<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, VariantAlsoNegotiates);
      resp.status = resp.statusCode = 506;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function InsufficientStorage(): ResponseObject<void>;
    export function InsufficientStorage<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function InsufficientStorage<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, InsufficientStorage);
      resp.status = resp.statusCode = 507;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function LoopDetected(): ResponseObject<void>;
    export function LoopDetected<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function LoopDetected<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, LoopDetected);
      resp.status = resp.statusCode = 508;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function BandwidthLimitExceeded(): ResponseObject<void>;
    export function BandwidthLimitExceeded<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function BandwidthLimitExceeded<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, BandwidthLimitExceeded);
      resp.status = resp.statusCode = 509;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function NotExtended(): ResponseObject<void>;
    export function NotExtended<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function NotExtended<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, NotExtended);
      resp.status = resp.statusCode = 510;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function NetworkAuthenticationRequired(): ResponseObject<void>;
    export function NetworkAuthenticationRequired<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function NetworkAuthenticationRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, NetworkAuthenticationRequired);
      resp.status = resp.statusCode = 511;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }
  export const Ok = OK;
}

module.exports = R;
exports = module.exports;
export default R;

export const Continue = R.Continue
export const SwitchingProtocols = R.SwitchingProtocols
export const Processing = R.Processing
export const EarlyHints = R.EarlyHints
export const OK = R.OK
export const Created = R.Created
export const Accepted = R.Accepted
export const NonAuthoritativeInformation = R.NonAuthoritativeInformation
export const NoContent = R.NoContent
export const ResetContent = R.ResetContent
export const PartialContent = R.PartialContent
export const MultiStatus = R.MultiStatus
export const AlreadyReported = R.AlreadyReported
export const IMUsed = R.IMUsed
export const MultipleChoices = R.MultipleChoices
export const MovedPermanently = R.MovedPermanently
export const Found = R.Found
export const SeeOther = R.SeeOther
export const NotModified = R.NotModified
export const UseProxy = R.UseProxy
export const TemporaryRedirect = R.TemporaryRedirect
export const PermanentRedirect = R.PermanentRedirect
export const BadRequest = R.BadRequest
export const Unauthorized = R.Unauthorized
export const PaymentRequired = R.PaymentRequired
export const Forbidden = R.Forbidden
export const NotFound = R.NotFound
export const MethodNotAllowed = R.MethodNotAllowed
export const NotAcceptable = R.NotAcceptable
export const ProxyAuthenticationRequired = R.ProxyAuthenticationRequired
export const RequestTimeout = R.RequestTimeout
export const Conflict = R.Conflict
export const Gone = R.Gone
export const LengthRequired = R.LengthRequired
export const PreconditionFailed = R.PreconditionFailed
export const PayloadTooLarge = R.PayloadTooLarge
export const URITooLong = R.URITooLong
export const UnsupportedMediaType = R.UnsupportedMediaType
export const RangeNotSatisfiable = R.RangeNotSatisfiable
export const ExpectationFailed = R.ExpectationFailed
export const MisdirectedRequest = R.MisdirectedRequest
export const UnprocessableEntity = R.UnprocessableEntity
export const Locked = R.Locked
export const FailedDependency = R.FailedDependency
export const UnorderedCollection = R.UnorderedCollection
export const UpgradeRequired = R.UpgradeRequired
export const PreconditionRequired = R.PreconditionRequired
export const TooManyRequests = R.TooManyRequests
export const RequestHeaderFieldsTooLarge = R.RequestHeaderFieldsTooLarge
export const UnavailableForLegalReasons = R.UnavailableForLegalReasons
export const InternalServerError = R.InternalServerError
export const NotImplemented = R.NotImplemented
export const BadGateway = R.BadGateway
export const ServiceUnavailable = R.ServiceUnavailable
export const GatewayTimeout = R.GatewayTimeout
export const HTTPVersionNotSupported = R.HTTPVersionNotSupported
export const VariantAlsoNegotiates = R.VariantAlsoNegotiates
export const InsufficientStorage = R.InsufficientStorage
export const LoopDetected = R.LoopDetected
export const BandwidthLimitExceeded = R.BandwidthLimitExceeded
export const NotExtended = R.NotExtended
export const NetworkAuthenticationRequired = R.NetworkAuthenticationRequired

export const Ok = R.Ok;
