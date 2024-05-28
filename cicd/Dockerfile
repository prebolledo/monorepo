FROM node:20.12.2-bullseye-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build

ARG APP
COPY . /usr/src/app
RUN rm -rf /usr/src/app/apps
COPY ./apps/$APP /usr/src/app/apps/$APP

WORKDIR /usr/src/app

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=$APP --prod /prod/$APP
COPY module-alias.json /prod/$APP
COPY cicd/add-module-aliases.js /prod/$APP

RUN REPO_ALIASES=$(pnpm pkg get _moduleAliases)

FROM base AS app
ARG APP
ARG PORT

COPY --from=build /prod/$APP /prod/$APP
WORKDIR /prod/$APP

RUN node add-module-aliases.js

EXPOSE $PORT

CMD [ "pnpm", "start" ]
#ENTRYPOINT ["tail", "-f", "/dev/null"]