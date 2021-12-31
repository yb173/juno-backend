SET client_encoding = 'UTF8';

CREATE SCHEMA IF NOT EXISTS juno;

CREATE TABLE juno.user(
  user_id serial NOT NULL,
  user_name varchar(20) NOT NULL,
  created_at timestamp with time zone NOT NULL,
  created_by varchar(20) NOT NULL,
  updated_at timestamp with time zone NOT NULL,
  updated_by varchar(20) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE juno.role(
  role_id serial NOT NULL,
  role_name varchar(20) NOT NULL,
  created_at timestamp with time zone NOT NULL,
  created_by varchar(20) NOT NULL,
  updated_at timestamp with time zone NOT NULL,
  updated_by varchar(20) NOT NULL,
  PRIMARY KEY (role_id)
);

CREATE TABLE juno.permission(
  permission_id serial NOT NULL,
  permission_name varchar(20) NOT NULL,
  created_at timestamp with time zone NOT NULL,
  created_by varchar(20) NOT NULL,
  updated_at timestamp with time zone NOT NULL,
  updated_by varchar(20) NOT NULL,
  PRIMARY KEY (permission_id)
);

CREATE TABLE juno.user_role(
  id serial NOT NULL,
  user_id integer NOT NULL,
  role_id integer NOT NULL,
  created_at timestamp with time zone NOT NULL,
  created_by varchar(20) NOT NULL,
  updated_at timestamp with time zone NOT NULL,
  updated_by varchar(20) NOT NULL,
  PRIMARY KEY (user_id, role_id),
  FOREIGN KEY (user_id) references juno.user(user_id),
  FOREIGN KEY (role_id) references juno.role(role_id)
);

CREATE TABLE juno.role_permission(
  id serial NOT NULL,
  role_id integer NOT NULL,
  permission_id integer NOT NULL,
  created_at timestamp with time zone,
  created_by varchar(20),
  updated_at timestamp with time zone,
  updated_by varchar(20),
  PRIMARY KEY (role_id, permission_id),
  FOREIGN KEY (role_id) references juno.role(role_id),
  FOREIGN KEY (permission_id) references juno.permission(permission_id)
);

INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('アトゥム', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('アテン', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('アヌビス', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('アペプ', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('アメン', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('イシス', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('イムホテプ', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ウアジェト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('オシリス', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('クヌム', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ゲブ', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ケプリ', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('コンス', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('シュー', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('セクメト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('セト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('セベク', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('セルケト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ソプデト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('タウエレト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('テフヌト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('トート', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ネイト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ネクベト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ヌト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ヌン', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ネフテュス', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('バステト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ハトホル', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ハピ', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('プタハ', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ヘケト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ベス', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ホルス', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('イムセティ(en)', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ハピ(en)', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ドゥアムトエフ(en)', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ケベフセヌエフ(en)', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('マアト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('マヘス（maahes）', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('メンヒト（Menhit）', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('モンチュ', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ムト', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('ラー', now(), 'system', now(), 'system');
INSERT INTO juno.user (user_name, created_at, created_by, updated_at, updated_by) VALUES ('メジェド', now(), 'system', now(), 'system');

INSERT INTO juno.role (role_name, created_at, created_by, updated_at, updated_by) VALUES ('管理者', now(), 'system', now(), 'system');
INSERT INTO juno.role (role_name, created_at, created_by, updated_at, updated_by) VALUES ('一般', now(), 'system', now(), 'system');

INSERT INTO juno.permission (permission_name, created_at, created_by, updated_at, updated_by) VALUES ('登録', now(), 'system', now(), 'system');
INSERT INTO juno.permission (permission_name, created_at, created_by, updated_at, updated_by) VALUES ('更新', now(), 'system', now(), 'system');
INSERT INTO juno.permission (permission_name, created_at, created_by, updated_at, updated_by) VALUES ('削除', now(), 'system', now(), 'system');
INSERT INTO juno.permission (permission_name, created_at, created_by, updated_at, updated_by) VALUES ('一覧', now(), 'system', now(), 'system');
