FROM node:20.12.2-bullseye-slim AS build

#PNPM path
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
#RUN corepack enable

WORKDIR /usr/src/root

ARG APP

COPY ../../*.json ./
COPY ../../*pnpm-lock.yaml ./
COPY ../../*jest.config.ts ./
COPY ../../*jest.preset.js ./
COPY ../../*eslintrc.json ./
COPY ../../apps/$APP ./apps/$APP
COPY ../../libs ./libs

RUN npm install -g pnpm@8.15.5
RUN pnpm i --frozen-lockfile
RUN npx nx build --project $APP

FROM build AS app
ARG APP

COPY --from=build /usr/src/root/node_modules /prod/node_modules
COPY --from=build /usr/src/root/package.json /prod/
COPY --from=build /usr/src/root/dist/apps/$APP /prod/dist/

WORKDIR /prod

EXPOSE $PORT

CMD ["node", "dist/main.js"]
#ENTRYPOINT ["tail", "-f", "/dev/null"]