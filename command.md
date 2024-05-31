pnpm i @nx/express
pnpm i @nx/node

npx nx reset
npx nx repair

npx nx g @nx/node:application cache --directory=apps/
npx nx g @nx/js:lib test1 --directory=libs/

npx nx build --project test2
npx nx build --project test1
npx nx build --project test3
npx nx build --project cache --production

npx nx serve cache

npx nx run-many -t build 


npx nx show project cache --web

nx g @nx/node:setup-docker

npx nx g @nx/node:setup-docker