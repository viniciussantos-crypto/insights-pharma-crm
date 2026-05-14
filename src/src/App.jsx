create table if not exists leads (
  id                        bigserial    primary key,
  name                      text         default '',
  city                      text         default '',
  state                     text         default 'AM',
  region                    text         default 'Norte',
  phone                     text         default '',
  email                     text         default '',
  responsible               text         default '',
  owner                     text         default '',
  address                   text         default '',
  instagram                 text         default '',
  website                   text         default '',
  stage                     text         default 'prospeccao',
  manipula_hormonios        boolean      default false,
  parceiros_medicos         boolean      default false,
  equipe_prop_medica        boolean      default false,
  abertura_novos_portfolios boolean      default false,
  localizacao_estrategica   boolean      default false,
  visit_comments            text         default '',
  meeting_scheduled         boolean      default false,
  meeting_date              text         default '',
  contacts                  jsonb        default '[]',
  created_at                timestamptz  default now(),
  updated_at                timestamptz  default now()
);

alter table leads enable row level security;

create policy "team_access" on leads for all using (true) with check (true);
