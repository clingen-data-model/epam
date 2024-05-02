create or replace view add_member_logs AS
select `al`.`id` AS `id`,`al`.`log_name` AS `log_name`,`al`.`activity_type` AS `activity_type`,`al`.`description` AS `description`,`al`.`subject_type` AS `subject_type`,`al`.`subject_id` AS `subject_id`,`al`.`causer_type` AS `causer_type`,`al`.`causer_id` AS `causer_id`,`al`.`properties` AS `properties`,`al`.`created_at` AS `created_at`,`al`.`updated_at` AS `updated_at`,`g`.`uuid` AS `group_uuid`,`g`.`name` AS `group_name`,`ep`.`uuid` AS `expert_panel_uuid`,json_unquote(json_extract(`al`.`properties`,'$.email')) AS `member_email`,`p`.`uuid` AS `member_uuid`,'|' AS `|` from (((`gpm`.`activity_log` `al` join `gpm`.`groups` `g` on(((`al`.`subject_id` = `g`.`id`) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group')))) join `gpm`.`expert_panels` `ep` on((`g`.`id` = `ep`.`group_id`))) join `gpm`.`people` `p` on((json_extract(`al`.`properties`,'$.id') = `p`.`id`))) where ((`al`.`activity_type` = 'member-added') and (`al`.`created_at` >= `ep`.`step_1_approval_date`));

create or replace view add_member_messages AS
select `sm`.`id` AS `id`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.id')) AS `group_uuid`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.name')) AS `ep_name`,json_unquote(json_extract(`sm`.`message`,'$.data.members[0].id')) AS `member_uuid`,json_unquote(json_extract(`sm`.`message`,'$.data.members[0].email')) AS `member_email`,`sm`.`message` AS `message` from `gpm`.`stream_messages` `sm` where (json_extract(`sm`.`message`,'$.event_type') = 'member_added');

create or replace view assign_role_logs as
select `al`.`id` AS `id`,`al`.`log_name` AS `log_name`,`al`.`activity_type` AS `activity_type`,`al`.`description` AS `description`,`al`.`subject_type` AS `subject_type`,`al`.`subject_id` AS `subject_id`,`al`.`causer_type` AS `causer_type`,`al`.`causer_id` AS `causer_id`,`al`.`properties` AS `properties`,`al`.`created_at` AS `created_at`,`al`.`updated_at` AS `updated_at`,`g`.`uuid` AS `group_uuid`,`g`.`name` AS `group_name`,`ep`.`uuid` AS `expert_panel_uuid`,json_unquote(json_extract(`al`.`properties`,'$.person.email')) AS `member_email`,`p`.`uuid` AS `member_uuid`,'|' AS `|` from (((`gpm`.`activity_log` `al` join `gpm`.`groups` `g` on(((`al`.`subject_id` = `g`.`id`) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group')))) join `gpm`.`expert_panels` `ep` on((`g`.`id` = `ep`.`group_id`))) join `gpm`.`people` `p` on((json_extract(`al`.`properties`,'$.member.id') = `p`.`id`))) where ((`al`.`activity_type` = 'member-role-assigned') and (`al`.`created_at` >= `ep`.`step_1_approval_date`));

create or replace view assign_role_messages as
select `sm`.`id` AS `id`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.id')) AS `group_uuid`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.name')) AS `ep_name`,json_unquote(json_extract(`sm`.`message`,'$.data.members[0].id')) AS `member_uuid`,json_unquote(json_extract(`sm`.`message`,'$.data.members[0].email')) AS `member_email`,`sm`.`message` AS `message` from `gpm`.`stream_messages` `sm` where (json_extract(`sm`.`message`,'$.event_type') = 'member_role_assigned');

create or replace view ep_def_appr_logs as 
select `al`.`id` AS `id`,`al`.`log_name` AS `log_name`,`al`.`activity_type` AS `activity_type`,`al`.`description` AS `description`,`al`.`subject_type` AS `subject_type`,`al`.`subject_id` AS `subject_id`,`al`.`causer_type` AS `causer_type`,`al`.`causer_id` AS `causer_id`,`al`.`properties` AS `properties`,`al`.`created_at` AS `created_at`,`al`.`updated_at` AS `updated_at`,`g`.`uuid` AS `group_uuid`,`g`.`name` AS `group_name`,`ep`.`uuid` AS `expert_panel_uuid`,'|' AS `|` from ((`gpm`.`activity_log` `al` left join `gpm`.`groups` `g` on(((`al`.`subject_id` = `g`.`id`) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group')))) left join `gpm`.`expert_panels` `ep` on((`g`.`id` = `ep`.`group_id`))) where ((`al`.`activity_type` = 'step-approved') and (json_unquote(json_extract(`al`.`properties`,'$.step')) = 1) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group'));

create or replace view ep_def_appr_messages AS
select `sm`.`id` AS `id`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.id')) AS `group_uuid`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.name')) AS `ep_name`,`sm`.`message` AS `message` from `gpm`.`stream_messages` `sm` where (json_extract(`sm`.`message`,'$.event_type') = 'ep_definition_approved');

create or replace view remove_member_logs as
select `g`.`uuid` AS `group_uuid`,`g`.`name` AS `group_name`,`ep`.`uuid` AS `expert_panel_uuid`,json_extract(`al`.`properties`,'$.person.id') AS `prop_member_id`,`p`.`uuid` AS `member_uuid`,trim(`p`.`email`) AS `member_email`,concat(`p`.`first_name`,' ',`p`.`last_name`) AS `member_name`,`al`.`id` AS `id`,`al`.`log_name` AS `log_name`,`al`.`activity_type` AS `activity_type`,`al`.`description` AS `description`,`al`.`subject_type` AS `subject_type`,`al`.`subject_id` AS `subject_id`,`al`.`causer_type` AS `causer_type`,`al`.`causer_id` AS `causer_id`,`al`.`properties` AS `properties`,`al`.`created_at` AS `created_at`,`al`.`updated_at` AS `updated_at`,'|' AS `|` from (((`gpm`.`activity_log` `al` join `gpm`.`groups` `g` on(((`al`.`subject_id` = `g`.`id`) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group')))) join `gpm`.`expert_panels` `ep` on((`g`.`id` = `ep`.`group_id`))) join `gpm`.`people` `p` on((json_extract(`al`.`properties`,'$.person.id') = `p`.`id`))) where ((`al`.`activity_type` = 'member-removed') and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group') and (`al`.`created_at` >= `ep`.`step_1_approval_date`));

create or replace view remove_member_messages as
select `sm`.`id` AS `id`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.id')) AS `group_uuid`,`g`.`name` AS `group_name`,json_unquote(json_extract(`sm`.`message`,'$.data.members[0].id')) AS `member_uuid`,trim(json_unquote(json_extract(`sm`.`message`,'$.data.members[0].email'))) AS `member_email`,`sm`.`message` AS `message` from (`gpm`.`stream_messages` `sm` join `gpm`.`groups` `g` on((`g`.`uuid` = json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.id'))))) where (json_unquote(json_extract(`sm`.`message`,'$.event_type')) = 'member_removed');

create or replace view retire_member_logs as
select `al`.`id` AS `id`,`al`.`log_name` AS `log_name`,`al`.`activity_type` AS `activity_type`,`al`.`description` AS `description`,`al`.`subject_type` AS `subject_type`,`al`.`event` AS `event`,`al`.`subject_id` AS `subject_id`,`al`.`causer_type` AS `causer_type`,`al`.`causer_id` AS `causer_id`,`al`.`properties` AS `properties`,`al`.`batch_uuid` AS `batch_uuid`,`al`.`created_at` AS `created_at`,`al`.`updated_at` AS `updated_at`,`g`.`uuid` AS `group_uuid`,`g`.`name` AS `group_name`,`ep`.`uuid` AS `expert_panel_uuid`,json_unquote(json_extract(`al`.`properties`,'$.person.email')) AS `member_email`,`p`.`uuid` AS `member_uuid` from (((`gpm`.`activity_log` `al` join `gpm`.`groups` `g` on(((`al`.`subject_id` = `g`.`id`) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group')))) join `gpm`.`expert_panels` `ep` on((`g`.`id` = `ep`.`group_id`))) join `gpm`.`people` `p` on((json_extract(`al`.`properties`,'$.person.id') = `p`.`id`))) where ((`al`.`activity_type` = 'member-retired') and (`al`.`created_at` >= `ep`.`step_1_approval_date`));

create or replace view retire_member_messages as
select `sm`.`id` AS `id`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.id')) AS `group_uuid`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.name')) AS `ep_name`,json_unquote(json_extract(`sm`.`message`,'$.data.members[0].id')) AS `member_uuid`,json_unquote(json_extract(`sm`.`message`,'$.data.members[0].email')) AS `member_email`,`sm`.`message` AS `message` from `gpm`.`stream_messages` `sm` where (json_extract(`sm`.`message`,'$.event_type') = 'member_retired');

create or replace view step_1_appr_logs as
select `al`.`id` AS `id`,`al`.`log_name` AS `log_name`,`al`.`activity_type` AS `activity_type`,`al`.`description` AS `description`,`al`.`subject_type` AS `subject_type`,`al`.`subject_id` AS `subject_id`,`al`.`causer_type` AS `causer_type`,`al`.`causer_id` AS `causer_id`,`al`.`properties` AS `properties`,`al`.`created_at` AS `created_at`,`al`.`updated_at` AS `updated_at`,`g`.`uuid` AS `group_uuid`,`g`.`name` AS `group_name`,`ep`.`uuid` AS `expert_panel_uuid`,'|' AS `|` from ((`gpm`.`activity_log` `al` left join `gpm`.`groups` `g` on(((`al`.`subject_id` = `g`.`id`) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group')))) left join `gpm`.`expert_panels` `ep` on((`g`.`id` = `ep`.`group_id`))) where ((`al`.`activity_type` = 'step-approved') and (json_unquote(json_extract(`al`.`properties`,'$.step')) = 1) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group'));

create or replace view step_1_appr_messages as
select `sm`.`id` AS `id`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.id')) AS `group_uuid`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.name')) AS `ep_name`,`sm`.`message` AS `message` from `gpm`.`stream_messages` `sm` where (json_extract(`sm`.`message`,'$.event_type') = 'ep_definition_approved');

create or replace view step_2_appr_logs as
select `al`.`id` AS `id`,`al`.`log_name` AS `log_name`,`al`.`activity_type` AS `activity_type`,`al`.`description` AS `description`,`al`.`subject_type` AS `subject_type`,`al`.`subject_id` AS `subject_id`,`al`.`causer_type` AS `causer_type`,`al`.`causer_id` AS `causer_id`,`al`.`properties` AS `properties`,`al`.`created_at` AS `created_at`,`al`.`updated_at` AS `updated_at`,`g`.`uuid` AS `group_uuid`,`g`.`name` AS `group_name`,`ep`.`uuid` AS `expert_panel_uuid`,'|' AS `|` from ((`gpm`.`activity_log` `al` left join `gpm`.`groups` `g` on(((`al`.`subject_id` = `g`.`id`) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group')))) left join `gpm`.`expert_panels` `ep` on((`g`.`id` = `ep`.`group_id`))) where ((`al`.`activity_type` = 'step-approved') and (json_unquote(json_extract(`al`.`properties`,'$.step')) = 2) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group'))

create or replace view step_2_appr_messages as
select `sm`.`id` AS `id`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.id')) AS `group_uuid`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.name')) AS `ep_name`,`sm`.`message` AS `message` from `gpm`.`stream_messages` `sm` where (json_extract(`sm`.`message`,'$.event_type') = 'vcep_draft_specifications_approved');

create or replace view step_3_appr_logs as
select `al`.`id` AS `id`,`al`.`log_name` AS `log_name`,`al`.`activity_type` AS `activity_type`,`al`.`description` AS `description`,`al`.`subject_type` AS `subject_type`,`al`.`subject_id` AS `subject_id`,`al`.`causer_type` AS `causer_type`,`al`.`causer_id` AS `causer_id`,`al`.`properties` AS `properties`,`al`.`created_at` AS `created_at`,`al`.`updated_at` AS `updated_at`,`g`.`uuid` AS `group_uuid`,`g`.`name` AS `group_name`,`ep`.`uuid` AS `expert_panel_uuid`,'|' AS `|` from ((`gpm`.`activity_log` `al` left join `gpm`.`groups` `g` on(((`al`.`subject_id` = `g`.`id`) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group')))) left join `gpm`.`expert_panels` `ep` on((`g`.`id` = `ep`.`group_id`))) where ((`al`.`activity_type` = 'step-approved') and (json_unquote(json_extract(`al`.`properties`,'$.step')) = 3) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group'));

create or replace view step_3_appr_messages as
select `sm`.`id` AS `id`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.id')) AS `group_uuid`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.name')) AS `ep_name`,`sm`.`message` AS `message` from `gpm`.`stream_messages` `sm` where (json_extract(`sm`.`message`,'$.event_type') = 'vcep_pilot_approved');

create or replace view step_4_appr_logs as
select `al`.`id` AS `id`,`al`.`log_name` AS `log_name`,`al`.`activity_type` AS `activity_type`,`al`.`description` AS `description`,`al`.`subject_type` AS `subject_type`,`al`.`subject_id` AS `subject_id`,`al`.`causer_type` AS `causer_type`,`al`.`causer_id` AS `causer_id`,`al`.`properties` AS `properties`,`al`.`created_at` AS `created_at`,`al`.`updated_at` AS `updated_at`,`g`.`uuid` AS `group_uuid`,`g`.`name` AS `group_name`,`ep`.`uuid` AS `expert_panel_uuid`,'|' AS `|` from ((`gpm`.`activity_log` `al` left join `gpm`.`groups` `g` on(((`al`.`subject_id` = `g`.`id`) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group')))) left join `gpm`.`expert_panels` `ep` on((`g`.`id` = `ep`.`group_id`))) where ((`al`.`activity_type` = 'application-completed') and (`g`.`group_type_id` = 4) and (`al`.`subject_type` = 'App\\Modules\\Group\\Models\\Group'));

create or replace view step_4_appr_messages as
select `sm`.`id` AS `id`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.id')) AS `group_uuid`,json_unquote(json_extract(`sm`.`message`,'$.data.expert_panel.name')) AS `ep_name`,`sm`.`message` AS `message` from `gpm`.`stream_messages` `sm` where (json_extract(`sm`.`message`,'$.event_type') = 'ep_final_approval');