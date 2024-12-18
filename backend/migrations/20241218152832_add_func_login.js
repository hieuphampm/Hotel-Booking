exports.up = async function(knex) {
    await knex.raw(`
        create function public.login(
            username text, password text
        ) returns Result as $$
        declare
            auth_info private.authentication;        
        begin
            select a.* into auth_info
            from private.authentication as a
            where a.username = $1; 

            if found then
                if auth_info.password_hash = crypt(password, auth_info.password_hash) then
                    return (true, 0, 'Login successfully', 
                        concat('{"role": "', auth_info.rolename, '"}')::jsonb
                    )::Result;
                else
                    return (false, 1, 'Invalid username or password', '{}'::jsonb
                )::Result;
                end if;
            else
                return (false, 1, 'Username does not exists', '{}')
                    ::Result;
            end if;          
      end;
      $$ language plpgsql strict security definer;
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
    `);
};